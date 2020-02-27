# MakeCode ROBOTIS [![Actions Status](https://github.com/microsoft/pxt-robotis/workflows/pxt-buildtarget/badge.svg)](https://github.com/microsoft/pxt-robotis/actions)

This is an experimental code editor for maker boards - Not supported yet
* [Read the docs](https://maker.makecode.com/about)

## [CAUTION] This is a documentation for only developer

## Who is this for?

This editor is meant for micro-controllers that are friendly to breadboarding. The editor is based on [Microsoft MakeCode](https://makecode.com).

## Local Dev Server

The local server lets you to run the editor and serve the documentation from your own computer.

### Setup

1. Install [Node.js](https://nodejs.org/) 8.9.4 or higher.
2. Install [Docker](https://www.docker.com/) if you are going to edit any `.cpp` files.
3. Clone the pxt repository.
```
git clone https://github.com/microsoft/pxt
cd pxt
```
4. Install the dependencies of ``Microsoft/pxt`` and build it
```
npm install
npm run build
cd ..
```
5. Clone the ``Microsoft/pxt-common-packages`` repository
```
git clone https://github.com/microsoft/pxt-common-packages
cd pxt-common-packages
npm install
cd ..
```
6. Clone the ``ROBOTIS-GIT/pxt-robotis`` repository
```
git clone https://github.com/ROBOTIS-GIT/pxt-robotis
cd pxt-robotis
```
7. Install the PXT command line (add `sudo` for Mac/Linux shells).
```
npm install -g pxt
```
8. Install the pxt-robotis dependencies.
```
npm install
```

### Refresh dal.d.ts files

Whenever you make changes to the ``#defines`` in the .cpp files, you will have to refresh
the ``dal.d.ts`` files. For that, run

```
pxt builddaldts
```

### CODAL changes

If you need to do changes to CODAL itself, follow these steps.

* create a new project in the web editor, then close the web server. Select the hardware you want to work with.
* using a command prompt, open the ``projects`` folder and find the subfolder with your new project
* open the folder in Visual Studio Code
```
code .
```
* open ``pxt.json`` and edit the dependencies to use 
the ``file:...`` path instead of ``*``

```
   dependencies: {
        "robotis-cm-300": "file:../../libs/robotis-cm-300"
   }
```
* from the command line, set the ``PXT_NODOCKER`` environment variable to ``1``

```
export PXT_NODOCKER=1
```

* run a local build that will create a CODAL checkout automatically. 
If you are missing tools, you will be notified by the build script.

```
pxt build --local --force
```

* go to the ``built/codal`` folder and open all CODAL in a new Visual Studio Code instance

```
cd built/codal
code libraries/*
```

* go to the Git tab in VS Code, and change the branch of the CODAL repository to work on to ``master``. You can create a new branch to start doing your work and pull requests.

* to build CODAL directly, run ``built/codal``
```
python build.py
```

* to rebuild your project from pxt, run ``pxt build --local --force`` from the project folder

### Running

Run this command from inside pxt-robotis to open a local web server
```
pxt serve
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

If you need to modify the `.cpp` files (and have installed yotta), enable yotta compilation using the `--localbuild` flag:
```
pxt serve --localbuild
```

### Updates

Make sure to pull changes from all repos regularly. More instructions are at https://github.com/microsoft/pxt#running-a-target-from-localhost

## Repos 

The pxt-maker target depends on several other repos. The main ones are:
- https://github.com/microsoft/pxt, the PXT framework
- https://github.com/microsoft/pxt-commmon-packages, common APIs accross various MakeCode editors
- https://github.com/lancaster-university/codal-core, CODAL core project
- https://github.com/lancaster-university/codal-nrf52, CODAL nRF52 core layer
- https://github.com/ROBOTIS-GIT/codal-nrf52, CODAL nRF52 core layer (for ROBOTIS)
- https://github.com/ROBOTIS-GIT/codal-cm300, ROBOTIS CM-300 board layer

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
