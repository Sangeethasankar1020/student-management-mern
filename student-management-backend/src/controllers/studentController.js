const studentService = require("../services/studentService");

const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentService.updateStudent(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
