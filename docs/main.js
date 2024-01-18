"use strict";
(self["webpackChunkangular_reactive_forms"] = self["webpackChunkangular_reactive_forms"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _validators_noSpaceAllowed_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/noSpaceAllowed.validator */ 3329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function AppComponent_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *First Name is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *No space is allowed for first name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Last Name is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Entered Email is not valid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *street address is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *country is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_small_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Postal is a required field. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_65_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.deleteSkills(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r11);
  }
}
function AppComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 22)(6, "select", 38)(7, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Junior Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Software Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Senior Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Team Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 40)(20, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_69_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const i_r15 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.DeleteExperience(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete Experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Experience ", i_r15 + 1, "");
  }
}
function AppComponent_section_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 42)(1, "div", 43)(2, "div", 44)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 45)(6, "div", 46)(7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Date of birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 46)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r9.formdata.firstName == null ? null : ctx_r9.formdata.firstName.slice(0, 1), "", ctx_r9.formdata.lastName == null ? null : ctx_r9.formdata.lastName.slice(0, 1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r9.formdata.firstName, " ", ctx_r9.formdata.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.dob, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.formdata.address == null ? null : ctx_r9.formdata.address.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.address == null ? null : ctx_r9.formdata.address.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.address == null ? null : ctx_r9.formdata.address.region, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.formdata.address == null ? null : ctx_r9.formdata.address.postal, "");
  }
}
class AppComponent {
  constructor() {
    this.formStatus = '';
    this.formdata = {};
  }
  ngOnInit() {
    this.reactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _validators_noSpaceAllowed_validator__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.noSpaceAllowed]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _validators_noSpaceAllowed_validator__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.noSpaceAllowed]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _validators_noSpaceAllowed_validator__WEBPACK_IMPORTED_MODULE_0__.CustomValidators.checkUserName),
      dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('male', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('india', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        region: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
      }),
      skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)]),
      experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([])
    });
    this.reactiveForm.statusChanges.subscribe(status => {
      console.log(status);
      this.formStatus = status;
    });
  }
  onFormSubmitted() {
    console.log(this.reactiveForm.value);
    this.formdata = this.reactiveForm.value;
    this.reactiveForm.reset({
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address: {
        street: null,
        country: 'India',
        city: null,
        region: null,
        postal: null
      },
      skills: [null],
      experience: []
    });
  }
  /*Add field  */
  addSkills() {
    this.reactiveForm.get('skills').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required));
  }
  /**Removing field */
  deleteSkills(index) {
    const controls = this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
  AddExperience() {
    const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      position: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      totalExp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    this.reactiveForm.get('experience').push(formGroup);
  }
  DeleteExperience(index) {
    const formArray = this.reactiveForm.get('experience');
    formArray.removeAt(index);
  }
  //method to generate username
  generateUsername() {
    let username = '';
    const fName = this.reactiveForm.get('firstName').value;
    const lName = this.reactiveForm.get('lastName').value;
    const dob = this.reactiveForm.get('dob').value;
    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    } else {
      username += fName;
    }
    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    } else {
      username += lName;
    }
    let datetime = new Date(dob);
    username += datetime.getFullYear();
    username = username.toLowerCase();
    console.log(username);
    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'New Delhi'
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 74,
    vars: 14,
    consts: [[1, "container", 3, "ngClass"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "column"], [1, "input-box"], ["type", "text", "placeholder", "First Name", "formControlName", "firstName"], [4, "ngIf"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastName"], ["type", "text", "placeholder", "Email", "formControlName", "email"], ["type", "text", "placeholder", "username", "formControlName", "username"], ["type", "button", 1, "btn-gen-username", 3, "disabled", "click"], ["type", "date", "placeholder", "Date of Birth", "formControlName", "dob"], [1, "gender-box"], [1, "gender-option"], [1, "gender"], ["type", "radio", "value", "male", "id", "check-male", "formControlName", "gender"], ["for", "check-male"], ["type", "radio", "value", "female", "id", "check-female", "formControlName", "gender"], ["for", "check-female"], ["type", "radio", "value", "other", "id", "check-other", "formControlName", "gender"], ["for", "check-other"], ["formGroupName", "address", 1, "input-box", "address"], ["type", "text", "placeholder", "Street address", "formControlName", "street"], [1, "select-box"], ["name", "country", "formControlName", "country"], ["hidden", ""], ["type", "text", "placeholder", "City", "formControlName", "city"], ["type", "text", "placeholder", "Region", "formControlName", "region"], ["type", "number", "placeholder", "Postal code", "formControlName", "postal"], ["formArrayName", "skills", 1, "input-box", "skills"], ["class", "column", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-add-delete", 3, "click"], ["formArrayName", "experience", 1, "input-box"], ["class", "experience", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "Submit", 1, "submit-btn", 3, "disabled"], ["class", "user-detail-container", 4, "ngIf"], ["type", "text", "placeholder", "Add Skill...", 3, "formControlName"], [1, "experience", 3, "formGroupName"], ["type", "text", "placeholder", "Company Name", "formControlName", "company"], ["formControlName", "position"], ["type", "number", "placeholder", "Experience", "formControlName", "totalExp"], ["type", "date", "placeholder", "Start Date", "formControlName", "start"], ["type", "date", "placeholder", "End Date", "formControlName", "end"], [1, "user-detail-container"], [1, "user-details-container"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onFormSubmitted();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_small_7_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_small_8_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_small_11_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_small_14_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2)(16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
          return ctx.generateUsername();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Create a Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11)(23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12)(26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Prefer not to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AppComponent_small_42_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 2)(44, "div", 22)(45, "select", 23)(46, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "America");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AppComponent_small_56_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 26)(60, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AppComponent_small_61_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28)(63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Add Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AppComponent_div_65_Template, 4, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() {
          return ctx.addSkills();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Add Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AppComponent_div_69_Template, 23, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_70_listener() {
          return ctx.AddExperience();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Add Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AppComponent_section_73_Template, 35, 11, "section", 34);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.formStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reactiveForm.get("firstName").errors == null ? null : ctx.reactiveForm.get("firstName").errors["required"]) && ((tmp_2_0 = ctx.reactiveForm.get("firstName")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reactiveForm.get("firstName").errors == null ? null : ctx.reactiveForm.get("firstName").errors["noSpaceAllowed"]) && ((tmp_3_0 = ctx.reactiveForm.get("firstName")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.reactiveForm.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.reactiveForm.get("lastName")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.reactiveForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.reactiveForm.get("email")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.reactiveForm.get("firstName").value && ctx.reactiveForm.get("lastName").value && ctx.reactiveForm.get("dob").value));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.reactiveForm.get("address.street")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.reactiveForm.get("address.street")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.reactiveForm.get("address.country")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.reactiveForm.get("address.country")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.reactiveForm.get("address.postal")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.reactiveForm.get("address.postal")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reactiveForm.get("skills")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reactiveForm.get("experience")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.reactiveForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reactiveForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
    styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 700px;\n  width: 100%;\n  background: #fff;\n  padding: 20px 50px;\n  border-radius: 8px;\n}\n\n.container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333;\n  font-weight: 500;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n}\n\n.input-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.input-box   input[_ngcontent-%COMP%], .select-box)[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  outline: none;\n  font-size: 1rem;\n  color: #707070;\n  margin-top: 8px;\n  \n  border-radius: 6px;\n  padding: 0 15px;\n}\n\n.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n}\n\n.form[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 15px;\n}\n\n.form[_ngcontent-%COMP%]   .gender-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.gender-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 8px;\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.gender-option, .gender)[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  column-gap: 50px;\n  flex-wrap: wrap;\n}\n\n.form[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%] {\n  column-gap: 5px;\n}\n\n.gender[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: rgb(130, 106, 251);\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.gender   input[_ngcontent-%COMP%], .gender[_ngcontent-%COMP%]   label)[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.gender[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\n.address[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(input, .select-box)[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.experience[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(input, .select-box)[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.experience[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-radius: 5px;\n  border: #bcbcbc 2px solid;\n  margin-top: 10px;\n}\n\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  border: none;\n  color: #707070;\n  font-size: 1rem;\n}\n\n.form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 100%;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 400;\n  margin-top: 30px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #E7005E;\n}\n\n.form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  background: #E70044;\n}\n\n\n@media screen and (max-width: 500px) {\n  .form[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.gender-option, .gender)[_ngcontent-%COMP%] {\n    row-gap: 15px;\n  }\n}\n.form-shadow[_ngcontent-%COMP%] {\n  box-shadow: rgba(187, 185, 185, 0.35) 0px 5px 15px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: red 2px solid;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.btn-gen-username[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  padding: 10px 30px;\n  border-radius: 5px;\n  background: #E7005E;\n  border: none;\n  color: white;\n}\n\n.btn-add-delete[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  padding: 10px 30px;\n  border-radius: 5px;\n  background: #E7005E;\n  border: none;\n  color: white;\n  width: 100%;\n}\n\n.skills[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.user-detail-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 700px;\n  width: 100%;\n  background: #fff;\n  padding: 20px 30px;\n  border-radius: 8px;\n  margin-top: 30px;\n}\n\n.user-details-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background-color: #282C35;\n  font-size: 75px;\n  font-weight: bold;\n  padding: 40px 40px;\n  color: white;\n}\n\n.user-details[_ngcontent-%COMP%] {\n  padding: 0px 40px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  border-bottom: #123 2px solid;\n  width: 100%;\n  margin-top: 10px;\n}\n\nspan[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  font-weight: bold;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: red 2px solid;\n}\n\ninput.ng-pending[_ngcontent-%COMP%] {\n  border: yellow 2px solid;\n}\n\n.container.VALID[_ngcontent-%COMP%] {\n  border: green 3px solid;\n}\n\n.container.INVALID[_ngcontent-%COMP%] {\n  border: red 3px solid;\n}\n\n.container.PENDING[_ngcontent-%COMP%] {\n  border: orange 3px solid;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vRW0lQzMlQURsaW8vYW5ndWxhci1yZWFjdGl2ZS1mb3Jtcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUEsYUFBQTtBQUNBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7RURFQTtJQUNFLGFBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxrREFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FESUE7RUFDRSx3QkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FESUE7RUFDRSx3QkFBQTtBQ0RGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtIC5pbnB1dC1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmlucHV0LWJveCBsYWJlbCB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5mb3JtIDp3aGVyZSguaW5wdXQtYm94IGlucHV0LCAuc2VsZWN0LWJveCkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLmlucHV0LWJveCBpbnB1dDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtIC5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sdW1uLWdhcDogMTVweDtcclxufVxyXG5cclxuLmZvcm0gLmdlbmRlci1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5nZW5kZXItYm94IGgzIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtIDp3aGVyZSguZ2VuZGVyLW9wdGlvbiwgLmdlbmRlcikge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiA1MHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZvcm0gLmdlbmRlciB7XHJcbiAgY29sdW1uLWdhcDogNXB4O1xyXG59XHJcblxyXG4uZ2VuZGVyIGlucHV0IHtcclxuICBhY2NlbnQtY29sb3I6IHJnYigxMzAsIDEwNiwgMjUxKTtcclxufVxyXG5cclxuLmZvcm0gOndoZXJlKC5nZW5kZXIgaW5wdXQsIC5nZW5kZXIgbGFiZWwpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nZW5kZXIgbGFiZWwge1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uYWRkcmVzcyA6d2hlcmUoaW5wdXQsIC5zZWxlY3QtYm94KSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UgOndoZXJlKGlucHV0LCAuc2VsZWN0LWJveCkge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogI2JjYmNiYyAycHggc29saWQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdC1ib3ggc2VsZWN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybSAuc3VibWl0LWJ0biB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6ICNFNzAwNUU7XHJcbn1cclxuXHJcbi5mb3JtIC5zdWJtaXQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRTcwMDQ0O1xyXG59XHJcblxyXG4vKlJlc3BvbnNpdmUqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5mb3JtIC5jb2x1bW4ge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0gOndoZXJlKC5nZW5kZXItb3B0aW9uLCAuZ2VuZGVyKSB7XHJcbiAgICByb3ctZ2FwOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tc2hhZG93IHtcclxuICBib3gtc2hhZG93OiByZ2JhKDE4NywgMTg1LCAxODUsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IHJlZCAycHggc29saWQ7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLWdlbi11c2VybmFtZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNFNzAwNUU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1hZGQtZGVsZXRlIHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI0U3MDA1RTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG5cclxuLnVzZXItZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udXNlci1hdmF0YXIge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM1O1xyXG4gIGZvbnQtc2l6ZTogNzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXNlci1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzEyMyAycHggc29saWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IHJlZCAycHggc29saWQ7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXBlbmRpbmcge1xyXG4gIGJvcmRlcjogeWVsbG93IDJweCBzb2xpZDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5WQUxJRCB7XHJcbiAgYm9yZGVyOiBncmVlbiAzcHggc29saWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIuSU5WQUxJRCB7XHJcbiAgYm9yZGVyOiByZWQgM3B4IHNvbGlkO1xyXG59XHJcblxyXG4uY29udGFpbmVyLlBFTkRJTkcge1xyXG4gIGJvcmRlcjogb3JhbmdlIDNweCBzb2xpZDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jb250YWluZXIgaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybSAuaW5wdXQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmlucHV0LWJveCBsYWJlbCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybSA6d2hlcmUoLmlucHV0LWJveCBpbnB1dCwgLnNlbGVjdC1ib3gpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW5wdXQtYm94IGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtIC5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxNXB4O1xufVxuXG4uZm9ybSAuZ2VuZGVyLWJveCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5nZW5kZXItYm94IGgzIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZm9ybSA6d2hlcmUoLmdlbmRlci1vcHRpb24sIC5nZW5kZXIpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogNTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9ybSAuZ2VuZGVyIHtcbiAgY29sdW1uLWdhcDogNXB4O1xufVxuXG4uZ2VuZGVyIGlucHV0IHtcbiAgYWNjZW50LWNvbG9yOiByZ2IoMTMwLCAxMDYsIDI1MSk7XG59XG5cbi5mb3JtIDp3aGVyZSguZ2VuZGVyIGlucHV0LCAuZ2VuZGVyIGxhYmVsKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdlbmRlciBsYWJlbCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uYWRkcmVzcyA6d2hlcmUoaW5wdXQsIC5zZWxlY3QtYm94KSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5leHBlcmllbmNlIDp3aGVyZShpbnB1dCwgLnNlbGVjdC1ib3gpIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAjYmNiY2JjIDJweCBzb2xpZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlbGVjdC1ib3ggc2VsZWN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZm9ybSAuc3VibWl0LWJ0biB7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjRTcwMDVFO1xufVxuXG4uZm9ybSAuc3VibWl0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNFNzAwNDQ7XG59XG5cbi8qUmVzcG9uc2l2ZSovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9ybSAuY29sdW1uIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmZvcm0gOndoZXJlKC5nZW5kZXItb3B0aW9uLCAuZ2VuZGVyKSB7XG4gICAgcm93LWdhcDogMTVweDtcbiAgfVxufVxuLmZvcm0tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogcmdiYSgxODcsIDE4NSwgMTg1LCAwLjM1KSAwcHggNXB4IDE1cHg7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogcmVkIDJweCBzb2xpZDtcbn1cblxuc21hbGwge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0bi1nZW4tdXNlcm5hbWUge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0U3MDA1RTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tYWRkLWRlbGV0ZSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTcwMDVFO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5za2lsbHMge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLnVzZXItZGV0YWlsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udXNlci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM1O1xuICBmb250LXNpemU6IDc1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItZGV0YWlscyB7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAjMTIzIDJweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xufVxuXG5pbnB1dC5uZy1wZW5kaW5nIHtcbiAgYm9yZGVyOiB5ZWxsb3cgMnB4IHNvbGlkO1xufVxuXG4uY29udGFpbmVyLlZBTElEIHtcbiAgYm9yZGVyOiBncmVlbiAzcHggc29saWQ7XG59XG5cbi5jb250YWluZXIuSU5WQUxJRCB7XG4gIGJvcmRlcjogcmVkIDNweCBzb2xpZDtcbn1cblxuLmNvbnRhaW5lci5QRU5ESU5HIHtcbiAgYm9yZGVyOiBvcmFuZ2UgM3B4IHNvbGlkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
})();

/***/ }),

/***/ 3329:
/*!********************************************************!*\
  !*** ./src/app/validators/noSpaceAllowed.validator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidators": () => (/* binding */ CustomValidators)
/* harmony export */ });
class CustomValidators {
  static noSpaceAllowed(control) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return {
        noSpaceAllowed: true
      };
    }
    return null;
  }
  static checkUserName(control) {
    return userNameAllowed(control.value);
  }
}
function userNameAllowed(username) {
  const takenUserNames = ['johnsmith', 'manojjha', 'sarahking'];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUserNames.includes(username)) {
        resolve({
          checkUsername: true
        });
      } else {
        resolve(null);
      }
    }, 5000);
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map