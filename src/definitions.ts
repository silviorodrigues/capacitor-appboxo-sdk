export interface AppboxoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
