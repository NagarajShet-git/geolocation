import { PipeTransform, Pipe } from "@angular/core";
import { User } from "../users/user";

@Pipe({
  name: "userFilter"
})
export class UserFilter implements PipeTransform {
  transform(users: User[], searchstring: string): User[] {
    if (!users || !searchstring) {
      return users;
    }

    return users.filter(user => {
      return user.name.toLowerCase().indexOf(searchstring.toLowerCase()) !== -1;
    });
  }
}
