export function tick(timeInMS: number = 0): Promise<any> {
  return new Promise(resolve => {
    setTimeout(resolve, timeInMS);
  });
}
