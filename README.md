# Angular Block-UI Dynamic

## Demo

https://stackblitz.com/github/ashfaqch/angular-block-ui-dynamic-demo

## Install

```bash
npm install angular-block-ui-dynamic --save
```

## Quick start

**In your application root module definition add import `AngularBlockUiDynamicModule` and the plugin you want to use**

```typescript
import { AngularBlockUiDynamicModule } from 'angular-block-ui-dynamic';

@NgModule({
    declarations: [
    AppComponent
 ],
    imports: [
    BrowserModule,
    AngularBlockUiDynamicModule /* <--- */
 ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**Add to the html template to display block ui**

```html
    <block-ui-dynamic [visible]='true Or false'>Please wait...</block-ui-dynamic>
```