const WA_NUMBER = '34600000000'

export const WA_URL = `https://wa.me/${WA_NUMBER}`
export const IG_URL = 'https://www.instagram.com/aliciaypedro.dancers/'

/**
 * Genera una URL de WhatsApp con mensaje pre-rellenado.
 * Reduce la fricción del usuario al contactar.
 */
export function waUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
