export function getErrorName(message: string): string {
  const lastIndex = message.lastIndexOf(": ");
  if (lastIndex === -1) {
    return message;
  }
  const errorName = message.substring(lastIndex + 2);

  return errorName.trim().toLowerCase();
}
