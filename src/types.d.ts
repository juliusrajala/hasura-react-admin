declare module 'ra-data-hasura' {
  export function buildHasuraProvider(
    { client: any }
  ): Promise<any>
  export default buildHasuraProvider;
}