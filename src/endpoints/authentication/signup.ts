import {
  InvalidTypeException,
  MissingRequestBodyPropertyException,
} from '@srclaunch/exceptions';
import { CommunicationMedium, Person } from '@srclaunch/types';
import { Request, Response } from 'express';

// import {
//   checkUsernameAvailability,
//   signUpInCognito,
// } from '../../lib/core/auth/cognito/signup';
// import { createUser } from '../../lib/core/users';
// import { UserVerificationStatus } from '@srclaunch/types';

export const SignUpEndpoints = {
  checkUsernameAvailability: async (
    req: Request,
    res: Response,
  ) => {
    /*
     Promise<
    Response<{
      availability: boolean;
    }>
  >*/
    const { username } = req.body;

    if (!username) {
      throw new MissingRequestBodyPropertyException(
        'Missing "username" property in request body.',
        {
          form: {
            field: 'username',
          },
          origin: {
            file: 'endpoints/authentication/signup.ts',
            function: 'checkUsernameAvailability()',
          },
          scope: 'Authentication',
        },
      );
    }

    // const available = await checkUsernameAvailability({
    //   username,
    // });

    // if (!available) {
    //   throw new InvalidTypeException('"available" missing in response', {
    //     origin: {
    //       file: 'endpoints/authentication/signup.ts',
    //       function: 'checkUsernameAvailability()',
    //     },
    //     scope: 'Authentication',
    //   });
    // }

    // return res.status(200).json({
    //   available,
    // });
  },
  signUp: async (
    req: Request,
    res: Response,
  ) => {
    /*: Promise<
    Response<{
      code_delivery_details: unknown;
      person_id: Person['id'];
    }>
  >*/
    const { password, first_name, last_name, username } = req.body;

    if (!username) {
      throw new MissingRequestBodyPropertyException(
        'Missing "username" property in request body.',
        {
          form: {
            field: 'username',
          },
          origin: {
            file: 'endpoints/authentication/signup.ts',
            function: 'checkUsernameAvailability()',
          },
          scope: 'Authentication',
        },
      );
    }

    if (!password) {
      throw new MissingRequestBodyPropertyException(
        'Missing "password" property in request body.',
        {
          form: {
            field: 'password',
          },
          origin: {
            file: 'endpoints/authentication/signup.ts',
            function: 'signUp()',
          },
          scope: 'Authentication',
        },
      );
    }

    if (!first_name) {
      throw new MissingRequestBodyPropertyException(
        'Missing "first_name" property in request body.',
        {
          form: {
            field: 'first_name',
          },
          origin: {
            file: 'endpoints/authentication/sign-up.ts',
            function: 'signUp()',
          },
          scope: 'Authentication',
        },
      );
    }

    if (!last_name) {
      throw new MissingRequestBodyPropertyException(
        'Missing "last_name" property in request body.',
        {
          form: {
            field: 'last_name',
          },
          origin: {
            file: 'endpoints/authentication/sign-up.ts',
            function: 'signUp()',
          },
          scope: 'Authentication',
        },
      );
    }

    // const { cognito_id, delivery_details } = await signUpInCognito({
    //   first_name,
    //   last_name,
    //   password,
    //   username,
    // });

    // if (!delivery_details) {
    //   throw new InvalidTypeException('"delivery_details" missing in response', {
    //     origin: {
    //       file: 'endpoints/authentication/signup.ts',
    //       function: 'signUp()',
    //     },
    //     scope: 'Authentication',
    //   });
    // }

    // if (!cognito_id) {
    //   throw new InvalidTypeException('cognitoId = null | undefined', {
    //     origin: {
    //       file: 'endpoints/authentication/signup.ts',
    //       function: 'signUp()',
    //     },
    //     scope: 'Authentication',
    //   });
    // }

    // await createUser({
    //   cognitoId: cognito_id,
    //   personId: undefined,
    // });

    // return res.status(200).json({
    //   code_delivery_details: delivery_details,
    //   // @ts-ignore
    //   user_id: cognito_id,
    // });
  },
};
