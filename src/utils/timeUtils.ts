
export const timeToSeconds = (timeStr: string): number => {
  if (!timeStr) return 0;
  const isNegative = timeStr.startsWith('-');
  const cleanTime = isNegative ? timeStr.slice(1) : timeStr;
  const parts = cleanTime.split(':').map(Number);
  const h = parts[0] || 0;
  const m = parts[1] || 0;
  const s = parts[2] || 0;
  const totalSeconds = (h * 3600) + (m * 60) + s;
  return isNegative ? -totalSeconds : totalSeconds;
};

export const secondsToTime = (totalSeconds: number): string => {
  const isNegative = totalSeconds < 0;
  const absSeconds = Math.abs(totalSeconds);
  const h = Math.floor(absSeconds / 3600);
  const m = Math.floor((absSeconds % 3600) / 60);
  const s = absSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${isNegative ? '-' : ''}${String(h).padStart(2, '0')}:${pad(m)}:${pad(s)}`;
};