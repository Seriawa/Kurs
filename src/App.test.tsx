import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './App';

test('renders course list', () => {
  render(<CourseList />);
  const course1 = screen.getByText(/Курс 1/i);
  const course2 = screen.getByText(/Курс 2/i);
  const course3 = screen.getByText(/Курс 3/i);
  expect(course1).toBeInTheDocument();
  expect(course2).toBeInTheDocument();
  expect(course3).toBeInTheDocument();
});

test('renders back button', () => {
  render(<CourseList />);
  const backButton = screen.getByText(/Назад/i);
  expect(backButton).toBeInTheDocument();
});

test('renders contest button', () => {
  render(<CourseList />);
  const contestButton = screen.getByText(/Конкурс\(заказ\)/i);
  expect(contestButton).toBeInTheDocument();
});

test('renders schedule button', () => {
  render(<CourseList />);
  const scheduleButton = screen.getByText(/Расписание/i);
  expect(scheduleButton).toBeInTheDocument();
});

test('renders registration button', () => {
  render(<CourseList />);
  const registrationButton = screen.getByText(/Версии для записи на курсы/i);
  expect(registrationButton).toBeInTheDocument();
});
