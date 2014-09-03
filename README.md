####Table of Contents

1. [Overview](#overview)
2. [Setup - Getting started with Bastion generator](#setup)
3. [Usage - Configuration options and additional functionality](#usage)
4. [Development - Guide for contributing to the module](#development)

##Overview

This is a (Yeoman)[http://www.yeoman.io] based generator for quickly scaffolding new components in Bastion. 

##Setup

To install the Bastion generator:

```
npm install --save-dev generator-bastion
```

##Usage

The Bastion generator provides numerous options for adding a new bare bones component to the project.
The generator provides an interactive prompt that can be run via:

```
yo bastion
```

Shortcut methods are also provided for each component type.
The components follow a similar convention when providing the module and name by separating the two with a slash. For example,

```
products/ProductBulkAction
content-views/ContentViewDetailsController
```

Thus, to create a controller, service or factory:

```
yo bastion:controller content-views/ContentViewDetailsController
yo bastion:service products/ProductBulk
yo bastion:factory products/ProductBulk
```

##Configuration

By default, the generator assumes that files should be placed in a directory denoted by `module/` within `app/assets/javascripts/bsation`.
However, this can be customized by adding the following to your `.yo-rc.json` file at the root of your project.

```
{
    "generator-bastion": {
        "appRoot": "app/assets/javascripts/foo"
    }
}
```

##Development

See the CONTRIBUTING guide for steps on how to make a change and get it accepted upstream.

