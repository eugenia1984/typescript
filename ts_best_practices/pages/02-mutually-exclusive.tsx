import type { NextPage } from 'next'
import { DualAlert } from '../src/02-mutually-exclusive/dual-alert'

const MutuallyExclusive: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Mutually exclusive props</h2>
      { /* Should be invalid */}
      <DualAlert
        messageId="hello-tsx"
      />
      { /* Should be invalid */}
       <DualAlert
        message="Can we do mutually exclusive props?"
      />
      { /* Should be valid */}
       <DualAlert
        message="Can we do mutually exclusive props?"
        messageId="hello-tsx"
      />
    </div>
  );
};

export default MutuallyExclusive;
