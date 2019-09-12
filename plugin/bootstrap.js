function onLoaded() {
    var csInterface = new CSInterface();
    var locale = csInterface.hostEnvironment.appUILocale;

    loadJSX();
    csInterface.addEventListener('ApplicationBeforeQuit', function(event) {
        csInterface.evalScript('$._PPP_.closeLog()');
    });
    csInterface.evalScript('$._PPP_.keepPanelLoaded()');
    csInterface.evalScript('$._PPP_.disableImportWorkspaceWithProjects()');
    csInterface.evalScript('$._PPP_.registerProjectPanelSelectionChangedFxn()'); // Project panel selection changed
    csInterface.evalScript('$._PPP_.registerItemAddedFxn()'); // Item added to project
    csInterface.evalScript('$._PPP_.registerProjectChangedFxn()'); // Project changed
    csInterface.evalScript('$._PPP_.registerSequenceSelectionChangedFxn()'); // Selection within the active sequence changed
    csInterface.evalScript('$._PPP_.registerSequenceActivatedFxn()'); // The active sequence changed
    csInterface.evalScript(
        '$._PPP_.registerActiveSequenceStructureChangedFxn()'
    ); // Clips within the active sequence changed
    csInterface.evalScript('$._PPP_.registerSequenceMessaging()');
    csInterface.evalScript('$._PPP_.registerActiveSequenceChangedFxn()');
    csInterface.evalScript('$._PPP_.confirmPProHostVersion()');
    csInterface.evalScript('$._PPP_.clearESTKConsole()');
    csInterface.evalScript('$._PPP_.forceLogfilesOn()'); // turn on log files when launching
    csInterface.evalScript("$._PPP_.setLocale('" + locale + "')");
}

/**
 * Load JSX file into the scripting context of the product. All the jsx files in
 * folder [ExtensionRoot]/jsx & [ExtensionRoot]/jsx/[AppName] will be loaded.
 */
function loadJSX() {
    var csInterface = new CSInterface();

    // get the appName of the currently used app. For Premiere Pro it's "PPRO"
    var appName = csInterface.hostEnvironment.appName;
    var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);

    // load general JSX script independent of appName
    var extensionRootGeneral = extensionPath + '/jsx/';
    csInterface.evalScript('$._ext.evalFiles("' + extensionRootGeneral + '")');

    // load JSX scripts based on appName
    var extensionRootApp = extensionPath + '/jsx/' + appName + '/';
    csInterface.evalScript('$._ext.evalFiles("' + extensionRootApp + '")');
}
