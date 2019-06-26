import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];
  editable = false;
  conf: boolean;
  showTable: boolean = false;

  myPost = {
    title: '',
    body: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(data => {
      this.posts = data;
    }, err => {
      console.log(err);
    })
  }


  createPost() {
    this.postService.create(this.myPost).subscribe(res => {
      this.posts.unshift(res);
      this.showTable = false;
      this.initPost();
    }, err => {
      console.log(err);
    });
  }

  // deleteConfirmation(id, index) {
  //   this.conf = confirm('Etes vous sùre ?');
  //   if (this.conf) {
  //     this.deletePost(id, index);
  //   }
  // }


  deleteConfirmation(id, index) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this post!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.deletePost(id, index);
        // Swal.fire(
        //   'Deleted!',
        //   'Your Posts has been deleted.',
        //   'success'
        // )

        Swal.fire({
          title: 'Deleted!',
          text: 'this post is deleted',
          timer: 3000,
          type: 'success'
        })
      }
    })
  }



  deletePost(id, index) {
    this.postService.delete(id).subscribe(() => {
      this.posts.splice(index, 1);
    }, err => {
      console.log(err);
    });
  }

  editPost(post) {
    this.myPost = post;
    this.editable = true;
    this.showTable = true;
  }

  updatePost() {
    this.postService.update(this.myPost).subscribe(res => {
      this.editable = false;
      this.showTable = false;
      this.initPost();

    }, err => {
      console.log(err);
    })
  }

  initPost() {
    this.myPost = {
      title: '',
      body: ''
    }
  }

  onShowForm() {
    this.showTable = !this.showTable;
  }


  log(postTitle) {
    console.log(postTitle);
  }

  addPost(myForm) {
    console.log(myForm);
    if (myForm.valid) {
      this.postService.create(this.myPost).subscribe(res => {
        this.posts.unshift(res);

        this.myPost = {
          title: '',
          body: ''
        }
      })
    } else {
      alert('formulaire non valid');
    }
  }


}
