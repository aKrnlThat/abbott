# Abbott

A simple JavaScript abbreviation library for numbers in HTML.

## Use

### Install

Simply drop in the [abbott.min.js](./abbott.min.js) into your project and include it within your HTML:

```html
<script src="where-you-placed/abbott.min.js"></script>
```

Remember to use the actual location of abbott.min.js in your project.

**We recommend the minified version, since it won't get updated until version is bumped (which is after lots of commits and tests on the unmodified dev version, abbott.js).**

### Configure

For now, we can only support configuring a hover tooltip (using `title` which is availab;e in most browsers) to show the actual unabbreviated count. This is enabled by default.

All configurations are in the global object `abbottConfig`. Here's the structure in JSON:

```json
{
  "unabbreviatedVerTooltip": true
}
```

#### In dev branch
> [!WARNING]
> These configurations are from the DEV branch and not applied to the latest release at abbott.min.js.
> **DO NOT** use dev branch in production usage of Abbott.

* `hasDynamicElements`: When set to `true`, checks for any new unabbreviated elements and abbreviates them every 2 seconds. Default: `false`.

### Usage within HTML
Any elements with JUST a number (add a span for the actual number if you have a suffix after the number) and the class `abbott-abbreviate` will be abbreviated!
