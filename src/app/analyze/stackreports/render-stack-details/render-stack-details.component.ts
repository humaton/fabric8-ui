import { Component, OnInit} from '@angular/core';

import { StackAnalysesService } from '../stack-analyses.service';
import { StackAnalysesModel } from '../stack-analyses.model';
import { RenderComponentService } from '../render-component.service';
import {RenderNextService} from './render-next-service';
import {AddWorkFlowService} from './add-work-flow.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-render-stack-details',
  templateUrl: './render-stack-details.component.html',
  styleUrls: ['./render-stack-details.component.css'],
  providers: [AddWorkFlowService, RenderNextService, StackAnalysesService, StackAnalysesModel, RenderComponentService]
})
export class RenderStackDetailsComponent implements OnInit {
  errorMessage: string;
  stackAnalysesData: {};
  componentAnalysesData: {};
  mode = 'Observable';
  average_usage = '';
  low_public_usage_components = '';
  redhat_distributed_components = '';

  average_stars = '';
  average_forks = '';
  low_popularity_components = '';

  distinct_licenses = '';
  total_licenses = '';

  total_security_issues = '';
  cvss = '';

  components_with_tests = '';
  components_with_dependency_lock_file = '';
  required_engines = {}
  required_enginesArr = [];

  componentDataObject = {};
  componentsDataTable = [];

  currentStackRows : Array<any> = [];
  currentStackHeaders : Array<string> = [];

  recoArray : Array<any> = [];
  currentIndex : number = 0;
  similarStacks : Array<any> = [];
  recoActionArray : Array<any> = [];

  constructor(private addWorkFlowService : AddWorkFlowService, private renderNextService : RenderNextService, private stackAnalysesService: StackAnalysesService, private stackAnalysesModel: StackAnalysesModel, private renderComponentService: RenderComponentService) { }

  ngOnInit() {
    ////debugger;
    this.getStackAnalyses();
    //this.getComponentAnalyses();

    this.currentStackHeaders = [
        'name',
        'version'
    ];

    this.currentStackRows = [
        { name: 'Sample1', version: '0.1.1' },
        { name: 'Sample1', version: '0.1.1' },
        { name: 'Sample1', version: '0.1.1' },
        { name: 'Sample1', version: '0.1.1' }
    ];

    this.recoArray = [
      {
        'headers': [
          'name',
          'version'
        ],
        'rows': [
          { name: 'Sample1', version: '0.1.1' },
          { name: 'Sample1', version: '0.1.1' },
          { name: 'Sample1', version: '0.1.1' },
          { name: 'Sample1', version: '0.1.1' }
        ]
      }
    ];

    this.recoActionArray = [
      {
        'headers': [
          'name',
          'version',
          'action'
        ],
        'rows': [
          { name: 'Sample1', version: '0.1.1', action: '-' },
          { name: 'Sample1', version: '0.1.1', action: 'Add' },
          { name: 'Sample1', version: '0.1.1', action: 'Change' },
          { name: 'Sample1', version: '0.1.1', action: 'Add' }
        ]
      }
    ];
    this.similarStacks = ['stack A', 'stack B', 'stack C'];

  }

  /* Adding Single Work item */
  addWorkItem(row : any) : void {
    let workItemData : any = {"data":{"attributes":{"system.state":"new","system.title":"Sample Test","system.description":"Sample Description to test"},"relationships":{"baseType":{"data":{"id":"userstory","type":"workitemtypes"}}},"type":"workitems","id":"55"}};  
    workItemData.data.attributes["system.title"] = row.custom.name + ' ' + row.name + ' ' + row.version;
    let workflow : Observable<any> = this.addWorkFlowService.addWorkFlow(workItemData);
    workflow.subscribe((data) => {
      console.log(data);
    });
  }
  /* Adding Single Work item */

  /* Get Recommendation */
  getRecommendations(components, recommendation : any) : void {
    console.log('Inside');
    console.log(recommendation);
    const similar_stacks : any = recommendation.similar_stacks[0];
    const analysis : any = similar_stacks.analysis;
    let missing_packages : Array<any> = analysis.missing_packages;
    let version_mismatch : Array<any> = analysis.version_mismatch;

    const url : string = similar_stacks.uri;
    this.recoArray[this.currentIndex]['rows'] = [];
    this.recoArray[this.currentIndex]['url'] = url;
    for (var component in components) {
      this.recoArray[this.currentIndex]['rows'].push({ name: components[component].name, version: components[component].version });
    }
    for(let i in missing_packages) {
      this.recoArray[this.currentIndex]['rows'].push({
        'name': missing_packages[i],
        'version': '',
        'custom': {
          'name': 'Add',
          'type': 'checkbox'
        }
      });
    }
    for(let i in version_mismatch) {
      this.recoArray[this.currentIndex]['rows'].push({
        'name': version_mismatch[i],
        'version': '',
        'custom': {
          'name': 'Update',
          'type': 'checkbox'
        }
      });
    }
  }

  /* Add Workflow */
  /*addWorkFlow() : void {
    let workflow : Observable<any> = this.addWorkFlowService.addWorkFlow(null);
    workflow.subscribe((data) => {
      console.log(data);
    })
  }*/
  /* Add workflow */


  /* Get Recommendation */

  getComponents(components) : void {
    this.currentStackRows = [];
    for (var component in components) {
      this.currentStackRows.push({ name: components[component].name, version: components[component].version });
    }
  }

  getStackAnalyses() {
    this.stackAnalysesService.getStackAnalyses()
      .subscribe(
      stackAnalysesData => {
        this.stackAnalysesData = stackAnalysesData;

        this.getRecommendations(this.stackAnalysesData[0].components, this.stackAnalysesData[0].recommendation.recommendations);
        this.getComponents(this.stackAnalysesData[0].components);

        this.average_usage = this.stackAnalysesData[0].usage.average_usage;
        this.low_public_usage_components = this.stackAnalysesData[0].usage.low_public_usage_components;
        this.redhat_distributed_components = this.stackAnalysesData[0].usage.redhat_distributed_components;

        this.average_stars = this.stackAnalysesData[0].popularity.average_stars;
        this.average_forks = this.stackAnalysesData[0].popularity.average_forks;
        this.low_popularity_components = this.stackAnalysesData[0].popularity.low_popularity_components;

        this.distinct_licenses = this.stackAnalysesData[0].distinct_licenses;
        this.total_licenses = this.stackAnalysesData[0].total_licenses;

        this.total_security_issues = this.stackAnalysesData[0].total_security_issues;
        this.cvss = this.stackAnalysesData[0].cvss;

        this.components_with_tests = this.stackAnalysesData[0].metadata.components_with_tests;
        this.components_with_dependency_lock_file = this.stackAnalysesData[0].metadata.components_with_dependency_lock_file;
        this.required_engines = this.stackAnalysesData[0].metadata.required_engines;
        for (var key in this.required_engines) {
          //////debugger;
          this.required_enginesArr.push({ key: key, value: this.required_engines[key] });
        }

        ////debugger;
        for (var i = 0; i < this.stackAnalysesData[0].components.length; i++) {
          var myObj = Object.assign({}, this.stackAnalysesModel);
          myObj.ecosystem = this.stackAnalysesData[0].components[i].ecosystem;
          myObj.package = this.stackAnalysesData[0].components[i].name;
          myObj.version = this.stackAnalysesData[0].components[i].version;
          myObj.latest_version = this.stackAnalysesData[0].components[i].latest_version;
          myObj.public_usage = this.stackAnalysesData[0].components[i].dependents_count;
          myObj.relative_public_usage = this.stackAnalysesData[0].components[i].relative_usage;
          if (this.stackAnalysesData[0].components[i].github_details.forks_count) {
            myObj.popularity = this.stackAnalysesData[0].components[i].github_details.forks_count + "/" + this.stackAnalysesData[0].components[i].github_details.stargazers_count;
          } else {
            myObj.popularity = '';
          }

          myObj.redhat_usage = '';
          myObj.licence = this.stackAnalysesData[0].components[i].licenses[0];
          this.componentsDataTable.push(myObj);
        }

      },
      error => this.errorMessage = <any>error
      );
  }

  handleNext(value) : void {
    //++ this.currentIndex;
    //Hit a new Ajax call and populate the Array
    let nextObservable : Observable<any> = this.renderNextService.getNextList(this.recoArray[this.currentIndex]['url']);
    nextObservable.subscribe((data) => {
      console.log(data);
    });
  }

  handlePrevious(value) : void {
    -- this.currentIndex;
  }

  getComponentAnalyses(item) {
    this.renderComponentService.getComponentAnalyses(item)
      .subscribe(
      componentAnalysesData => {
        ////debugger;
        this.componentAnalysesData = componentAnalysesData;
      },
      error => this.errorMessage = <any>error
      );
  }

  tdClicked(item) {
    alert('am in!!' + item);
    this.getComponentAnalyses(item);
  }

}
