export const BRAND_NAME = "FLOW";
export const BRAND_TAGLINE = "Sportwear";

export function brandTitle(page?: string): string {
  return page ? `${page} | ${BRAND_NAME}` : `${BRAND_NAME} | ${BRAND_TAGLINE}`;
}
