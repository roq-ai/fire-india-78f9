import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MeetingInterface {
  id?: string;
  scheduled_time: any;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface MeetingGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
