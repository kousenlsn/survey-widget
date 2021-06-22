## survey-widget
*Lightweight and simple (predefined) survey pop-up component as a widget / lib.*

### Motivation :running:

- Knowledge test app.

### Features :mag_right:

- Add as a single script to any html page;
- Add custom callback events between the survey steps to do anything with the selected data;
- "Continue where you stopped" feature based on initial data.

### Build :construction_worker:

##### Building as a widget:
1. ``npm install`` 
2. ``npm build``
3. Use results at ./dist/

##### Building as a lib (ESM module):
1. ``npm install``
2. ``npm build:es``
3. Use results at ./dist/es/

### Use :electric_plug:

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

##### Sample - there is a sample .html file in the project that can be ran by:
1. [Building as a widget](#building-as-a-widget);
2. ``npx serve``

##### Use as a lib:
1. [Building as a lib](#building-as-a-lib-esm-module) (not published);
2. Import at your project
  ```
    import { Survey } from 'path/to/lib';

    ...

    <Survey
      {...surveyProps}
    />
  ```

### Options :flags:

|Opt|Default|Description|
|---|---|---|
| delay: *number* | 2000ms | Time before displaying the survey. |
| onNextCb: *onNextCb?: (data: SurveyData) => void* | Store the survey data in the **localStorage** | Callback on every press of next step.  |
| onNextCb: *onFinishCb?: (data: SurveyData) => void* | Store "is completed" in the **localStorage** | Callback after pressing finish. |
| initialData: *SurveyData* | Reads from **localStorage** | initial data to be shown at the form, and which defines the current step. |

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

- React
- Typescript
- [React-hook-form](https://react-hook-form.com/)
- [Styled components](https://styled-components.com/)
- [ESBuild](https://esbuild.github.io/)
