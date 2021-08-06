import { BaseResource } from "./base";
import { Connection } from "@/models/connections";


export class ConnectionsResource extends BaseResource {
  /**
   * List all connections that the app has access to.
   * https://developers.akahu.nz/reference/get_connections
   */
  public async list(): Promise<Connection[]> {
    return await this._client._apiCall<Connection[]>({ path: '/connections', auth: { basic: true } });
  }

  /**
   * Get an individual connection detail.
   * https://developers.akahu.nz/reference/get_connections-id
   */
  public async get(connectionId: string): Promise<Connection> {
    return await this._client._apiCall<Connection>({
      path: `/connections/${connectionId}`,
      auth: { basic: true }
    });
  }


  /**
   * Refresh all accounts that are made using the given connection and have been
   * connected by the user associated with the specified `token`.
   * https://developers.akahu.nz/reference/post_refresh-id
   */
  public async refresh(token: string, connectionId: string): Promise<void> {
    return await this._client._apiCall<void>({
      path: `/refresh/${connectionId}`,
      auth: { token }
    });
  }
}
