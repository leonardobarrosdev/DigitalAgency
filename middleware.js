import { NextResponse } from "next/server";
 
let locales = ['en-US', 'nl-NL', 'nl']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    const acceptLanguage = request.headers.get('Accept-Language')
    // e.g. en-US,en;q=0.9,nl;q=0.8
    const preferredLocales = acceptLanguage.split(',')
    // e.g. ['en-US', 'en', 'nl']
    for (const preferredLocale of preferredLocales) {
        const locale = preferredLocale.split(';')[0]
        if (locales.includes(locale)) {
        return locale
        }
    }
    return 'en-US'
}
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}