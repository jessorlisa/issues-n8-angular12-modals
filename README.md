# Issues with NativeScript 8 and Angular 12 concerning modals

**Environment**
- CLI: `├── nativescript@8.0.2`
- Cross-platform modules: `@nativescript/core@8.0.8`
- Android Runtime: `├── @nativescript/android@8.0.0`
- iOS Runtime: `├── @nativescript/ios@6.5.4` (**JSC**)
- Plugin(s):

  `├── @angular/animations@12.0.5`

  `├── @angular/common@12.0.5`

  `├── @angular/compiler@12.0.5`

  `├── @angular/compiler-cli@12.0.5`

  `├── @angular/core@12.0.5`

  `├── @angular/forms@12.0.5`

  `├── @angular/platform-browser@12.0.5`

  `├── @angular/platform-browser-dynamic@12.0.5`

  `├── @angular/router@12.0.5`

  `├── @nativescript/angular@12.0.5`

  `├── @nativescript/core@8.0.8`

  `├── @nativescript/theme@3.0.1`

  `├── @nativescript/types@8.0.1`

  `├── @nativescript/webpack@5.0.0-beta.15`

  `├── @ngtools/webpack@12.0.5`

  `├── rxjs@6.6.7`
  `├── typescript@4.2.4`
  `└── zone.js@0.11.4`


**Describe the bug**

Since uprading to Angular 12 the following issues occur:

1. ScrollView within a modal is no longer working
2. Opening a second modal from a first modal throws the following error:

   `ERROR TypeError: options.parentView.showModal is not a function`

Related GitHub issue: https://github.com/NativeScript/angular/issues/17

**To Reproduce**
1. Clone this repository
2. Run the project `ns run android` (or `ns run ios`)
3. Tap any list item to open first modal -> scroll does not work (1st issue)
4. Tap on "Open 2nd modal" -> check console output for error (2nd issue)

**Expected behavior**
1. Scrolling works
2. No error, 2nd modal opens

**Additional context**
Both scenarios worked totally fine before upgrading to Angular 12. To demonstrate it, I created a branch `downgrade-to-angular-11`.
Check out the branch, run `ns clean` and run the project again -> everything is working as expected.

I could not find any changes regading modal handling, did I miss anything? Any hint in the right direction would be welcomed.

Thanks!

