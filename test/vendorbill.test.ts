import { Sublist } from '../DataAccess/Sublist';
import { VendorBillBase } from '../DataAccess/BaseRecords/VendorBillBase';

describe('vendor bill', () => {
	test('sublists exist', () => {
		const sut = new VendorBillBase();

		// should have an 'item' sublist and 'expense' sublist
		expect(sut.item).toBeInstanceOf(Sublist);
		expect(sut.expense).toBeInstanceOf(Sublist);
	});
});
