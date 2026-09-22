/* Two-digit index for sheet numbers, stage numbers and role rows: 01, 02... */
export const pad = (n: number) => String(n).padStart(2, "0");
