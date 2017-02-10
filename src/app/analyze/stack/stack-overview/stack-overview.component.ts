import { Stack } from './../../../models/stack';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Router }            from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> e5f6d20... add recommender feature under analyze
=======
import { Router } from '@angular/router';
>>>>>>> 97e90ae... fixup merge conflict recommendor

import { ContextService } from './../../../shared/context.service';


@Component({
  selector: 'alm-stack',
  templateUrl: 'stack-overview.component.html',
  styleUrls: ['./stack-overview.component.scss']
})
export class StackOverviewComponent implements OnInit {

  private collapsed: Map<Stack, Boolean>;

  constructor(
    private router: Router,
    public context: ContextService) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.collapsed = new Map();
=======
    this.collapsed = new Map();
>>>>>>> e5f6d20... add recommender feature under analyze
=======
    this.collapsed = new Map();
>>>>>>> 97e90ae... fixup merge conflict recommendor
  }

  ngOnInit() {

  }

}