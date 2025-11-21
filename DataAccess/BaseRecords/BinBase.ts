/**
 * Represents an Bin record in NetSuite
 */

import * as record from 'N/record';
import { FieldType, NetsuiteRecord } from '../Record';

/**
 * Bin Base Type (bin)
 */
export class BinBase extends NetsuiteRecord {
	static override recordType() {
		return record.Type.BIN;
	}

	@FieldType.freeformtext
	binnumber: string;

	@FieldType.freeformtext
	externalid: string;

	@FieldType.checkbox
	isinactive: boolean;

	@FieldType.select
	location: number;

	@FieldType.textarea
	memo: string;
}
