import { exec, logger, os, path } from "../../../utils";

export const execute = (options: any, config: any) => ({
  ios: async () => {
    if (os.linux) {
      logger.logInfo("not running pod install on linux");
      return;
    }

    logger.logInfo("running pod install");

    try {
      await exec.async(`cd "${path.project.resolve("ios")}" && pod install`);
    } catch {
      logger.logError(
        "pod install failed, here are the few things you can try to fix:\n" +
          `\t1. Run "brew install cocoapods" if don't have cocoapods installed\n` +
          `\t2. Run "pod repo update" to update your local spec repos`
      );
      process.exit(1);
    }
  },
  android: async () => {
    //
  },
});
