-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  niche TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Public read for site rendering
CREATE POLICY "Anyone can view leads for site rendering"
  ON public.leads FOR SELECT USING (true);

-- Allow inserts
CREATE POLICY "Anyone can insert leads"
  ON public.leads FOR INSERT WITH CHECK (true);

-- Allow updates
CREATE POLICY "Anyone can update leads"
  ON public.leads FOR UPDATE USING (true);

-- Allow deletes
CREATE POLICY "Anyone can delete leads"
  ON public.leads FOR DELETE USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();