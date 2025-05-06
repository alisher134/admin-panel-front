import { instance } from "@/api/axios";
import { IMainForm } from "@/app/(main)/(form)/main-form.types";
import { IRequest } from "@/types";

export interface IPaginationResponse<T> {
  items: T[];
  isHasMore: boolean;
}

export interface IPaginationParams {
  skip?: number;
  take?: number;
  searchTerm?: string;
}

class RequestService {
  private base = "/request";

  async getRequests(params?: IPaginationParams) {
    return instance.get<IPaginationResponse<IRequest>>(`${this.base}`, {
      params,
    });
  }

  async createRequest(createRequestDto: IMainForm) {
    return instance.post<IRequest>(`${this.base}`, createRequestDto);
  }

  async deleteRequest(id: string | number) {
    return instance.delete<void>(`${this.base}/${id}`);
  }
}

export default new RequestService();
