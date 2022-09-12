import * as types from "@amplication/code-gen-types";
import { ContextUtil } from "@amplication/code-gen-types";
import winston from "winston";
import { readPluginStaticModules } from "./read-static-modules";

const contextUtil = {
  skipDefaultBehavior: false,
  importStaticModules: readPluginStaticModules,
};

class DsgContext implements types.DsgContext {
  public appInfo!: types.AppInfo;
  public entities: types.Entity[] = [];
  public roles: types.Role[] = [];
  public modules: types.Module[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public DTOs: types.DTOs = {};
  public plugins: types.PluginMap = {};
  public logger: winston.Logger = winston.createLogger();
  public utils: ContextUtil = contextUtil;

  private static instance: DsgContext;

  public static get getInstance(): DsgContext {
    return this.instance || (this.instance = new this());
  }

  private constructor() {
    //prevent external code from creating instances of the context
  }
}

export default DsgContext;
