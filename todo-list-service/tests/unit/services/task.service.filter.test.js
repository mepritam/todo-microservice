const { getAllTasksService } = require('../../../src/services/task.service');
const { getAllTasks, getTaskCount } = require('../../../src/repositories/task.repository');

// Mock the repository dependency
jest.mock('../../../src/repositories/task.repository', () => ({
	getAllTasks: jest.fn(),
	getTaskCount: jest.fn()
}));

describe('getAllTasksService - filter unit test', () => {

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should call repository methods with empty filter when no taskStatus provided', async () => {
		const query = {
			page: 1,
			limit: 10
		};

		getAllTasks.mockResolvedValue([]);
		getTaskCount.mockResolvedValue(0);

		await getAllTasksService(query);

		expect(getAllTasks).toHaveBeenCalledWith({}, expect.objectContaining({
			page: 0,
			limit: 10
		}));
		expect(getTaskCount).toHaveBeenCalledWith({});
	});
});
