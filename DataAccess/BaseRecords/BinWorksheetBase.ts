/**
 * NetSuite Bin Worksheet Record Type
 */

import * as record from 'N/record';
import { FieldType, NetsuiteRecord } from '../Record';
import { SublistFieldType, SublistLine } from '../Sublist';

export class ItemSublist extends SublistLine {
	@SublistFieldType.freeformtext
	description: string;

	@SublistFieldType.select
	item: number;

	@SublistFieldType.float
	quantity: number;
}

/**
 * NetSuite Bin Worksheet Record type
 */
export class BinWorksheetBase extends NetsuiteRecord {
	static override recordType() {
		return record.Type.BIN_WORKSHEET as const;
	}

	@FieldType.select
	location: number;

	@FieldType.longtext
	memo: string;

	@FieldType.select
	subsidiary: number;

	@FieldType.date
	trandate: Date;
}
