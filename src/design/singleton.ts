class SingleTon {
  private static instance: SingleTon;
  private constructor() {}
  public static getInstance(): SingleTon {
    if (!SingleTon.instance) {
      this.instance = new Proxy(this.instance, {
        set(target, property, value) {
          console.log(target, property, value);
          return true;
        },
      });
    }
    return Object.freeze(this.instance);
  }
}
