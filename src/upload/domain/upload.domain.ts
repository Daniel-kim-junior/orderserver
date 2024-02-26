import { AggregateRoot } from './aggregate.root';
import { UploadId } from './upload.id';

export class Upload extends AggregateRoot<UploadId> {}
