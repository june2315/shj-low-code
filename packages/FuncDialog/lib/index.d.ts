export declare const destroyFns: any[];
export interface IDialog {
  /**
   * 关闭弹框
   */
  destroy: () => void;
  /**
   * 更新弹框
   */
  update: (configUpdate: any) => void;
}
declare const CommonDialog: (config?: any) => IDialog;
export default CommonDialog;
