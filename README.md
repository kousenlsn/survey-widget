## survey-widget
*Lightweight simple (predefined) survey pop-up component as a widget / lib.*

### Motivation :running:

- Knowledge test app.

### Features :mag_right:

- Add as a single script to any html page;
- Add custom callback events between the survey step to do anything with the selected data;
- "Continue where you stopped" feature based on initial data.

### Run :construction_worker:

##### Building as a widget:
1. ``npm install`` 
2. ``npm build``
3. Use results at ./dist/

##### Building as a lib (ESM module):
1. ``npm install``
2. ``npm build:es``
3. Use results at ./dist/es/

##### Use as a widget:
1. Add to any ``.html`` file inside a ``<script>`` tag:
  ```
    <script src="./dist/survey-widget.js"></script>
  ```
2. Instanciate the widget:
  ```
    <script type="module">
      SurveyWidget.surveyWidget(
        // optional target selector
        // optional configs
      )
    </script>
  ```

##### Sample - there is a sample .html file at the project that can be ran by:
1. [Building as a widget](#building-as-a-widget);
2. ``npx serve``

### Options :flags:

|Opt|Default|Description|
|---|---|---|
| delay: *number* | 2000ms | Time before showing the survey. |
| onNextCb: *onNextCb?: (data: SurveyData) => void* | Store data at localStorage | Callback on every press of next step.  |
| onNextCb: *onFinishCb?: (data: SurveyData) => void* | Store "completed" at localStorage | Callback after pressing finish. |
| initialData: *SurveyData* | Reads from local storage | initial data to be shown at the form, and which defines the current step |

SurveyData:
```
 {
  name: string;
  email: string;
  age: string;
  gender: string;
  book: string;
  colors: string[];
 }
```


### Composition :hammer:

##### Core
- React
- Typescript
- [React-hook-form](https://react-hook-form.com/)
- [Styled components](https://styled-components.com/)
- [ESBuild](https://esbuild.github.io/)
