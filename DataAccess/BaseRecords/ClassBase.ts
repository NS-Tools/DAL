/**
 * NS Class/Classification record - contains definitions for most of the built-in fields
 */

import * as record from 'N/record';
import { FieldType, NetsuiteRecord } from '../Record';

/**
 * NetSuite Classification (classification)
 */
export class ClassBase extends NetsuiteRecord {
	static override recordType() {
		return record.Type.CLASSIFICATION;
	}

	@FieldType.freeformtext
	externalid: string;

	@FieldType.checkbox
	includechildren: boolean;

	@FieldType.checkbox
	isinactive: boolean;

	@FieldType.freeformtext
	name: string;

	@FieldType.select
	parent: number;

	@FieldType.select
	subsidiary: number;
}
