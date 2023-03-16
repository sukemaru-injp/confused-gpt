export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type ResourceStatus = 'pending' | 'fulfilled' | 'rejected'
export type Resource<T> = {
  read: () => T
} 
export function resource<T>(promise: Promise<T>): Resource<T>{
  let status: ResourceStatus = 'pending';
  let res: T;

  const suspender = promise.then(
    (r) => {
      status = 'fulfilled';
      res = r;
    },
    (e) => {
      status = 'rejected';
      res = e;
  });

  const read = () => {
    switch(status) {
      case 'pending':
        throw suspender;
      case 'fulfilled':
        return res;
      case 'rejected':
        throw res;
      default:
        throw new Error('予想外')
    }
  };

  return { read };
}
