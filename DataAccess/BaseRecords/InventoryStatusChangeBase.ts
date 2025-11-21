/**
 * NetSuite Inventory Status Change Record Type
 */

import * as record from 'N/record';
import { FieldType, NetsuiteRecord } from '../Record';

/**
 *
 * Inventory Status Change NetSuite record
 */
export class InventoryStatusChangeBase extends NetsuiteRecord {
	static override recordType() {
		return record.Type.INVENTORY_STATUS_CHANGE;
	}

	@FieldType.freeformtext
	externalid: string;

	@FieldType.select
	location: number;

	@FieldType.freeformtext
	memo: string;

	@FieldType.select
	previousstatus: number;

	@FieldType.select
	revisedstatus: number;
}
