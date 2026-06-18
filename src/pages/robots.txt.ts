import type { APIRoute } from 'astro';
import { isProductionBuild } from '../lib/site';

// Dynamische robots.txt — wird an einer echten Root-Domain (Produktion) von
// Crawlern gelesen. Auf der GitHub-Pages-Projektseite liegt /robots.txt nicht
// im Repo-Pfad und ist dort wirkungslos; den Schutz übernimmt dann das
// <meta name="robots"> noindex im <head>.
export const GET: APIRoute = () =>
  new Response(
    isProductionBuild
      ? 'User-agent: *\nAllow: /\n'
      : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
