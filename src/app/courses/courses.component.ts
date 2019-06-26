import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  editable = false;
  img = 'https://cdn.pixabay.com/photo/2017/04/08/16/16/beach-2213623_960_720.jpg';
  titleForMyImage = 'image alt';

  myCourse = {
    title: '',
    price: 0,
    published: new Date()
  };

  courses = [
    { title: 'Angular', price: 11, published: new Date() },
    { title: 'ReactJS', price: 23, published: new Date() },
    { title: 'VueJs', price: 21, published: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }



  addCourse() {
    this.courses = [this.myCourse, ...this.courses]
    this.initCourse();
  }

  deleteCourse(index) {

    this.courses.splice(index, 1);
  }

  editCourse(course) {
    this.editable = true;
    this.myCourse = course;
  }

  updateCourse() {
    this.initCourse();
  }

  initCourse() {
    this.editable = false;
    this.myCourse = {
      title: '',
      price: 0,
      published: new Date()
    };
  }


}
