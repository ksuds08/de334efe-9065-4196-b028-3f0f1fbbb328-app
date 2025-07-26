export async function TemplateLibraryHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'GET') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const templates = getAvailableTemplates();
    return new Response(JSON.stringify({ templates }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

interface Template {
  id: string;
  name: string;
  description: string;
  industry: string;
}

function getAvailableTemplates(): Template[] {
  return [
    {
      id: '1',
      name: 'Professional Template',
      description: 'A clean and professional looking resume template suitable for various industries.',
      industry: 'General'
    },
    {
      id: '2',
      name: 'Creative Template',
      description: 'A colorful and modern resume template suitable for creative fields.',
      industry: 'Creative'
    }
  ];
}