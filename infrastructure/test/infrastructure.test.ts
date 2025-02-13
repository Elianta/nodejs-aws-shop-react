import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as Infrastructure from "../lib/website-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/infrastructure-stack.ts
test("SQS Queue Created", () => {
  const app = new cdk.App();
  const stack = new Infrastructure.WebsiteStack(app, "MyTestStack");
  const template = Template.fromStack(stack);
  template.hasResourceProperties("AWS::SQS::Queue", {
    VisibilityTimeout: 300,
  });
});
