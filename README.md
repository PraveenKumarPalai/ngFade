# ng-fade
A simple directive to add fading effect to your elements.

## Installation

```
npm install ng-fade --save
```

## Usage

## Import into your NgModule

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgFadeModule } from 'ng-fade';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Add ngFade to your element 

```
    <img ngFade class="ng-fade-background" src="assets/images/fader.png">
```


## Contribution

Issues and pull requests are welcome for

* Unit test cases
* Bug fixes

## Author
![my_pic](https://avatars2.githubusercontent.com/u/30167153?s=460&v=4)

[](https://avatars2.githubusercontent.com/u/30167153?s=460&v=4)
### Praveen Kumar Palai

[LinkedIn](https://www.linkedin.com/in/praveenkumarpalai/) &bull; [Twitter](https://twitter.com/PraveenPalai) &bull; [Medium](https://medium.com/@praveenkumarpalai)