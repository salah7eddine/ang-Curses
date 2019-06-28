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
    published: new Date(),
    vote: { like: 0, dislike: 0 }
  };

  courses = [
    { vote: { like: 10, dislike: 1 }, title: 'Angular', price: 11, published: new Date() },
    { vote: { like: 12, dislike: 11 }, title: 'ReactJS', price: 23, published: new Date() },
    { vote: { like: 2, dislike: 12 }, title: 'VueJs', price: 21, published: new Date() }
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
      published: new Date(),
      vote: { like: 0, dislike: 0 }
    };
  }

  takeVote(data, course) {
    if (data.type) {
      course.vote.like = data.value;
    } else {
      course.vote.dislike = data.value;
    }
  }
}
