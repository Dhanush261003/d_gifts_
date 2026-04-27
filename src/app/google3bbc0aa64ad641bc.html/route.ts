export async function GET() {
  return new Response(
    "google-site-verification: google3bbc0aa64ad641bc.html",
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}