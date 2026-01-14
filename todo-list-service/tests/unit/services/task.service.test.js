// Mock the repository dependency
jest.mock('../../../src/repositories/task.repository', () => ({
  createNewTask: jest.fn()
}));

const { createTaskService } = require('../../../src/services/task.service');
const { createNewTask } = require('../../../src/repositories/task.repository');

describe('createTaskService - unit test', () => {

  it('should create a task when input is valid', async () => {

    const taskData = {
      taskName: 'Learn Jest',
      description: 'Unit testing service layer',
      taskStartDate: '2026-01-10T10:00:00.000Z',
      taskEndDate: '2026-01-11T10:00:00.000Z',
      totalEffortHours: 5,
      taskStatus: 'Pending'
    };

    const mockSavedTask = {
      _id: '123',
      ...taskData
    };

    createNewTask.mockResolvedValue(mockSavedTask);

    const result = await createTaskService(taskData);

    expect(createNewTask).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockSavedTask);
  });

});
