#include <stdio.h>
#include <math.h>

#ifndef M_PI
#define M_PI 3.1415927
#endif



main()
{
double theta[6];
theta[5]=0;
theta[4]=0;
double x[3] = {.38748,.02111,.10810};	

double xg=x[0];
double yg=x[1];
double zg=x[2];

printf('------------------------------------------');
println("%f\n",xg);
println("%f\n",yg);
println("%f\n",zg);
printf('------------------------------------------');

double x_with_d2=xg;
double y_with_d2=yg;
double z_with_d2=zg+0.15;

printf('------------------------------------------');
println("%f\n",x_with_d2);
println("%f\n",y_with_d2);
println("%f\n",z_with_d2);
printf('------------------------------------------');


double x_with_d2_new_axis=sqrt(pow(x_with_d2,2)+pow(y_with_d2,2));
double y_with_d2_new_axis=0;
double z_with_d2_new_axis=z_with_d2-0.25;

printf('------------------------------------------');
println("%f\n",x_with_d2_new_axis);
println("%f\n",y_with_d2_new_axis);
println("%f\n",z_with_d2_new_axis);
printf('------------------------------------------');

double x_without_d2_new_axis=x_with_d2_new_axis-.04;
double y_without_d2_new_axis=0;
double z_without_d2_new_axis=z_with_d2_new_axis;

printf('------------------------------------------');
println("%f\n",x_without_d2_new_axis);
println("%f\n",x_without_d2_new_axis);
println("%f\n",x_without_d2_new_axis);
printf('------------------------------------------');

double rsquare=pow(x_without_d2_new_axis,2)+pow(z_without_d2_new_axis,2);
double costheta2=(rsquare-.08)/.08;
double theta2=fabs(acos(costheta2));

double cosgamma=sqrt(rsquare)/.04;
double gamma=acos(costheta2);

double beta=atan(z_without_d2_new_axis/x_without_d2_new_axis);
double theta1=beta-gamma;
double theta3=(3.1415927/2.0)-theta1-theta2;

double theta0=atan(yg/x_with_d2);

theta[0]=theta0;
theta[1]=theta1;
theta[2]=theta2;
theta[3]=theta3;

printf('------------------------------------------');
println("%f\n",rsquare);
println("%f\n",beta);
println("%f\n",gamma);
printf('------------------------------------------');

printf('------------------------------------------');
println("%f\n",theta[0]);
println("%f\n",theta[1]);
println("%f\n",theta[2]);
println("%f\n",theta[3]);
printf('------------------------------------------');



}
