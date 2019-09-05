import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { User } from "../users/user";
import { GeometryService } from "../services/geometry.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnChanges {
  @Input() userId;
  user: User;
  error = {};

  constructor(private userService: GeometryService) {}

  ngOnChanges() {
    this.getUserByid();
  }
  ngOnInit() {}

  getUserByid() {
    this.userService
      .getUserByid(this.userId)
      .subscribe(
        (data: User) => (this.user = data),
        (error) => (this.error = error)
      );
  }
}
