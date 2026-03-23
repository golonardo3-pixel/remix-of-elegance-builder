import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { availableNiches } from "@/lib/niche-content";
import LeadSiteActions from "./LeadSiteActions";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function phoneToWhatsApp(phone: string): string {
  return "55" + phone.replace(/\D/g, "");
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddLeadDialog = ({ open, onOpenChange }: Props) => {
  const [companyName, setCompanyName] = useState("");
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [createdSlug, setCreatedSlug] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const slug = slugify(companyName);
      const whatsappPhone = phoneToWhatsApp(phone);
      const { error } = await supabase.from("leads").insert({
        company_name: companyName.trim(),
        niche: niche.trim(),
        city: city.trim(),
        phone: whatsappPhone,
        slug,
      });
      if (error) throw error;
      return slug;
    },
    onSuccess: (slug) => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
      toast({ title: "Site gerado com sucesso!" });
      setCreatedSlug(slug);
    },
    onError: (err: Error) => {
      toast({
        title: "Erro ao gerar site",
        description: err.message.includes("duplicate")
          ? "Já existe um lead com esse nome."
          : err.message,
        variant: "destructive",
      });
    },
  });

  const handleClose = (val: boolean) => {
    if (!val) {
      setCompanyName("");
      setNiche("");
      setCity("");
      setPhone("");
      setCreatedSlug(null);
    }
    onOpenChange(val);
  };

  const isValid = companyName.trim() && niche && city.trim() && phone.replace(/\D/g, "").length >= 10;

  if (createdSlug) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">Site Gerado! 🎉</DialogTitle>
          </DialogHeader>
          <LeadSiteActions slug={createdSlug} companyName={companyName} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Novo Lead</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div>
            <Label htmlFor="company">Nome da empresa</Label>
            <Input
              id="company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Ex: Studio Élise"
            />
          </div>
          <div>
            <Label htmlFor="niche">Nicho</Label>
            <Select value={niche} onValueChange={setNiche}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nicho" />
              </SelectTrigger>
              <SelectContent>
                {availableNiches.map((n) => (
                  <SelectItem key={n} value={n} className="capitalize">
                    {n.charAt(0).toUpperCase() + n.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ex: São Paulo, SP"
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone (WhatsApp)</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(11) 99999-9999"
            />
          </div>
          <Button
            onClick={() => mutation.mutate()}
            disabled={!isValid || mutation.isPending}
            className="w-full bg-gold text-foreground hover:bg-gold/90"
          >
            {mutation.isPending ? "Gerando site..." : "🚀 Gerar Site"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLeadDialog;
